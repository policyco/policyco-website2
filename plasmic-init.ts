import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {registerYouTube} from "@plasmicpkgs/react-youtube";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "oeyCcrAPc3AYxB67L7anHo",  // ID of a project you are using
      token: "6d32bE1EXPEBp3Tk9M6rK9ZjKYCGv4r9S29lgvu2hN0UeU2IHYA9k1gWy5culUBsT5o7mShLyTM2dRNtiYw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
registerYouTube(PLASMIC);