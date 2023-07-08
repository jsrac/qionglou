import { spawn } from 'child_process'
import { projectRoot } from './paths'
export const withTaskName = <T>(name: string, fn: () => T) =>
  Object.assign(fn, { displayName: name })

export const run = async (command: string) => {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(' ')
    const child = spawn(cmd, args, {
      stdio: 'inherit',
      shell: true,
      cwd: projectRoot
    })

    child.on('close', resolve)
  })
}

export const pathRewriter = (format: any) => {
  return (id: string) => {
    id = id.replaceAll('@qionglou', `qionglou/${format}`)
    return id
  }
}
