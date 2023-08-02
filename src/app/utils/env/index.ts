const wallpaper = process.env.NEXT_PUBLIC_VIDEO_WALLPAPER || ""
const gitHube = process.env.NEXT_PUBLIC_GITHUBE || ""
const gitHubeLastUrl = process.env.NEXT_PUBLIC_GITHUBE_LAST_URL || ""
const rawGitHub = process.env.NEXT_PUBLIC_RAW_GITHUBE || ""
const rawGitHubLastUrl = process.env.NEXT_PUBLIC_RAW_GITHUBE_LAST_URL || ""
const apiGitHub = process.env.NEXT_PUBLIC_API_GITHUBE || ""

export {
  wallpaper,
  gitHube,
  gitHubeLastUrl,
  rawGitHub,
  rawGitHubLastUrl,
  apiGitHub,
}