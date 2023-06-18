import path from 'path'
import detect from 'detect-port'

import { buildWebpackConfig } from './config/build/build-webpack-config'

import type { BuildPaths, BuildEnv, BuildMode } from './config/build/types/config'

export default async (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode: BuildMode = env.mode || 'development'
  const isDev: boolean = mode === 'development'

  const availablePort: number = await detect(+env.port)

  if (+env.port !== availablePort) {
    console.log(
      `Port ${env.port} is already in use. Trying ${availablePort}...`
    )
  }

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: availablePort
  })
}
