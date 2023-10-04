# Documentation

The FileDownloadNode module makes it easy to download files from the web programmatically in Node.js applications. It provides two main methods for downloading: one asynchronous using async/await and one using a callback.

## Module Installation

To install this module, open your terminal and run the following command:

```bash
npm install files-downloads-node
```

## We import the `files-downloads-node` module

```javascript
const FileDownloadNode = require("files-downloads-node");
```

## Asynchronous Download with `downloadAsync`

The `downloadAsync` method allows you to download a file asynchronously. You can use it as follows:

```javascript
const downloader = new FileDownloadNode();

async function downloadArchivo() {
  try {
    const options = {
      url: "https://www.ejemplo.com/archivo.pdf", // URL of the file to download
      outputDirectory: "./descargas", // Destination directory
      rename: "archivo_descargado.pdf", // Optional: rename the file
    };

    const filePath = await downloader.downloadAsync(options);
    console.log(`File downloaded and saved in: ${filePath}`);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}

downloadArchivo();
```

## Download with Callback using `download`

The `download` method allows downloads to be performed using a callback. Here is an example of how to use it:

```javascript
const downloader = new FileDownloadNode();

function downloadArchivoConCallback() {
  const options = {
    url: "https://www.ejemplo.com/archivo.pdf", // URL of the file to download
    outputDirectory: "./descargas", // Destination directory
    rename: "archivo_descargado.pdf", // Optional: rename the file
  };

  downloader.download(options, (error, filePath) => {
    if (error) {
      console.error("Error downloading file:", error);
    } else {
      console.log(`File downloaded and saved in: ${filePath}`);
    }
  });
}

downloadArchivoConCallback();
```

### Developer Name

- Name: Lwte
- Email: lokuedo5001@gmail.com
- GitHub profile: [GitHub](https://github.com/lokuedo5000)

### Report a Problem

If you think you have found a bug or a problem with the module, please create an "issue" in the official repository at [GitHub](https://github.com/lokuedo5000/files-downloads-node/issues). Be sure to provide the following information when reporting a problem:

- Detailed description of the problem.
- Step by step to reproduce the problem.
- Screenshots (if applicable).
- Module version and version of Node.js that you are using.

### Community Support

If you have general questions about using the module or need guidance, you can post your questions in the "Discussions" section of the GitHub repository. The user community and the developer can help you with your queries.
