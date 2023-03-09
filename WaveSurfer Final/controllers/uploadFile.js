const fs = require('fs');
const path = require('path');

exports.UploadFile = (req, res) => {
    if (req.files && Object.keys(req.files).length !== 0) {
        const uploadedFile = req.files.uploadFile;
       var FileName=uploadedFile.name;
        var FilePath = process.hrtime() + "_" + uploadedFile.name;
        const uploadPath = path.join(__dirname, '../public/assests/uploads/') + FilePath;

        var FileExtension = path.extname(uploadPath);
        if (FileExtension == ".mp3" || FileExtension == ".ogg" || FileExtension == ".wav" || FileExtension == ".m4A" || FileExtension == ".flac" || FileExtension == ".mp4" || FileExtension == ".wma" || FileExtension == ".acc") {
            if (!fs.existsSync(uploadPath)) {
                //To save the file using mv() function
                uploadedFile.mv(uploadPath, async (err) => {
                    if (err) {
                        res.render('index', {
                            error: 'File Uploading Failed'
                        })
                    }
                })

                FilePath = path.join('assests/uploads/', FilePath).replace(/\\/g, '/')
               var FileName = uploadedFile.name;
                res.render('index', {
                   FileName,
                    FilePath,
                    msg: 'File Uploaded Successfully!'
                })
            }
        }
        else {
            return res.render('index', {
                error: 'Audio File format not supported'
            })
        }
    }
}