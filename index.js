const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");

class FileDownloadNode {
    constructor() {

    }

    async downloadAsync({ url, outputDirectory, rename = false }) {
        return new Promise((resolve, reject) => {
            let protocol = https;
            if (url.startsWith('http://')) {
                protocol = http;
            }

            protocol.get(url, (response) => {
                let nameFile = path.basename(url);
                if (rename) {
                    nameFile = rename;
                }

                if (response.statusCode === 200) {
                    const filePath = path.join(outputDirectory, nameFile);
                    const fileStream = fs.createWriteStream(filePath);

                    response.pipe(fileStream);

                    fileStream.on('finish', (error) => {
                        fileStream.close();
                        resolve(filePath);
                    })

                    fileStream.on('error', (error) => {
                        reject(error)
                    })


                } else {
                    reject(new Error(`Failed to download: ${url}`));
                }

            }).on('error', (error) => {
                reject(error)
            });

        })
    }

    download({ url, outputDirectory, rename = false, callback }) {

        let protocol = https;
        if (url.startsWith('http://')) {
            protocol = http;
        }

        protocol.get(url, (response) => {
            let nameFile = path.basename(url);
            if (rename) {
                nameFile = rename;
            }

            if (response.statusCode === 200) {
                const filePath = path.join(outputDirectory, nameFile);
                const fileStream = fs.createWriteStream(filePath);

                response.pipe(fileStream);

                fileStream.on('finish', () => {
                    fileStream.close();
                    callback(null, filePath);
                });

                fileStream.on('error', (error) => {
                    callback(error);
                });


            } else {
                reject(new Error(`Failed to download: ${url}`));
            }

        }).on('error', (error) => {
            callback(error);
        });
    }
}


module.exports = FileDownloadNode;