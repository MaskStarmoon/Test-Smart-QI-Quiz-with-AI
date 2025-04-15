/* File Server */
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "SQQ")));

app.post('/save', (req, res) => {
  const newData = req.body;
  try {
    const existingData = JSON.parse(fs.readFileSync("database/dataQuest.json", 'utf8') || '[]');
    existingData.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');
    res.json({ success: true, message: "Data berhasil disimpan!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Gagal menyimpan data." });
  }
});

app.get('/', (req, res) = {
  res.sendFile(path.join(__dirname, "SQQ", "index.html"));
});
app.listen(3000, () => {});
