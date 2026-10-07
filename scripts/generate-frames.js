import { spawn, execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const framesDir = path.join(publicDir, 'frames');
const videoPath = path.join(publicDir, 'hero-video.mp4');
const posterPath = path.join(publicDir, 'video-poster.webp');

async function getFfmpegPath() {
  try {
    const ffmpegStatic = await import('ffmpeg-static');
    if (ffmpegStatic.default && fs.existsSync(ffmpegStatic.default)) {
      return ffmpegStatic.default;
    }
  } catch (e) {
    // ignore
  }
  return 'ffmpeg';
}

async function run() {
  console.log('--- Starting Frame Extraction ---');
  if (!fs.existsSync(videoPath)) {
    console.error(`Video file not found at: ${videoPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
  }

  const ffmpegBin = await getFfmpegPath();
  console.log(`Using ffmpeg binary: ${ffmpegBin}`);

  const args = [
    '-y',
    '-i', videoPath,
    '-vf', 'scale=1920:1080',
    '-c:v', 'libwebp',
    '-quality', '85',
    '-compression_level', '6',
    '-start_number', '1',
    path.join(framesDir, 'frame_%04d.webp')
  ];

  console.log(`Running: ${ffmpegBin} ${args.join(' ')}`);

  const proc = spawn(ffmpegBin, args, { stdio: 'inherit' });

  proc.on('close', (code) => {
    if (code !== 0) {
      console.error(`FFmpeg process exited with code ${code}`);
      process.exit(code || 1);
    }

    console.log('Frame extraction complete!');
    const firstFrame = path.join(framesDir, 'frame_0001.webp');
    if (fs.existsSync(firstFrame)) {
      fs.copyFileSync(firstFrame, posterPath);
      console.log(`Copied frame_0001.webp to ${posterPath}`);
    } else {
      console.warn('frame_0001.webp was not found to copy to video-poster.webp');
    }

    const files = fs.readdirSync(framesDir).filter(f => f.endsWith('.webp'));
    console.log(`Total WebP frames generated: ${files.length}`);
  });

  proc.on('error', (err) => {
    console.error('Failed to start FFmpeg process:', err);
    process.exit(1);
  });
}

run();
