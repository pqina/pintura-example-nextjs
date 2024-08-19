import React, { useState } from "react";

// react-pintura
import { PinturaEditor } from "@pqina/react-pintura";

// pintura
import { pintura } from "@pqina/pintura/pintura.module.css";
import { index as pinturaTheme } from "./index.module.css";
import { getEditorDefaults } from "@pqina/pintura";

// Import Pintura Video extension dependencies
/*
import {
  setPlugins,
  createDefaultImageWriter,
  createDefaultMediaWriter,
  imageStateToCanvas,
} from "@pqina/pintura";

// Install @pqina/pintura-video module, `npm i @pqina/pintura-video` (needs .npmrc and PQINA PRIVATE NPM KEY)
import "@pqina/pintura-video/pinturavideo.css";
import {
  plugin_trim_locale_en_gb,
  plugin_trim,
  createDefaultVideoWriter,
  createMediaStreamEncoder,
  createMuxerEncoder,
} from "@pqina/pintura-video";

// Install mp4-muxer module, `npm i mp4-muxer`
import * as Mp4Muxer from "mp4-muxer";

// Load the Trim plugin view
setPlugins(plugin_trim);
*/

// get default properties
const editorDefaults = getEditorDefaults({
  /*
  locale: {
    // Add the Trim plugin locale
    ...plugin_trim_locale_en_gb,
  },
  imageWriter: createDefaultMediaWriter(
    // Generic Media Writer options, passed to image and video writer
    {
      targetSize: {
        width: 400,
      },
    },
    [
      // For handling images
      createDefaultImageWriter(),

      // If possible use muxer to encode videos
      createDefaultVideoWriter({
          encoder: createMuxerEncoder({
            // when using the mp4 muxer we need to set video/mp4 mimetype
            muxer: Mp4Muxer,
            mimeType: "video/mp4",

            // video and audio bitrate to use (optional)
            videoBitrate: 2500000, // 2.5MBps
            audioBitrate: 192000, // 192KBps, should be either (96000, 128000, 160000, or 192000)

            // this draws the image
            imageStateToCanvas,

            // enable logging
            log: true,
          }),
        }),

      // Use MediaStream encoder as fallback
      createDefaultVideoWriter({
        // Video writer instructions here
        // ...

        // Encoder to use
        encoder: createMediaStreamEncoder({
          imageStateToCanvas,

          // video and audio bitrate to use (optional)
          videoBitrate: 2500000, // 2.5MBps
          audioBitrate: 192000, // 192KBps

          // enable logging
          log: true,
        }),
      }),
    ]
  ),
  */
});

export default function Example() {
  // inline result
  const [result, setResult] = useState("");

  return (
    <div>
      <h2>Video extension</h2>

      <p>
        Please run <code>npm install @pqina/pintura-video</code>, and uncomment
        the{" "}
        <a href="https://pqina.nl/pintura/docs/v8/api/video-editor/">
          video extension
        </a>{" "}
        related code in the `ExampleVideo.js` file. Please note that the video
        editor extension is only available on the PQINA private npm and requires
        purchasing a license.
      </p>

      <div style={{ height: "70vh" }}>
        <PinturaEditor
          {...editorDefaults}
          className={`${pintura} ${pinturaTheme}`}
          src={"./video.mp4"}
          util="trim"
          stickers={["😎"]}
          imageCropAspectRatio={1}
          onLoad={(res) => console.log("load media", res)}
          onLoaderror={console.error}
          onProcess={({ dest }) => dest && setResult(URL.createObjectURL(dest))}
          onProcesserror={console.error}
        />
      </div>

      {!!result.length && (
        <p>
          <video src={result} controls />
        </p>
      )}
    </div>
  );
}
