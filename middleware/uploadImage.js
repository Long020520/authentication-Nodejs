const fs = require('fs')

module.exports = async (req, res, next) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ msg: "No files weres uploaded" })
        }
        const file = req.files.file
        // console.log(file)
        if (file.size > 1024 * 1024) {
            removeTmp(file.tempFilePath)
            return res.status(400).json({ msg: "files too large" })
        }

        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            removeTmp(file.tempFilePath)
            return res.status(400).json({ msg: "files format is incorect" })
        }
        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err
    })
}