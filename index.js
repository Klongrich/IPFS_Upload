const fs = require('fs');
import fleekStorage from '@fleekhq/fleek-storage-js';

fs.readFile(filePath, async (error, fileData) => {
    const uploadedFile = await fleekStorage.upload({
      apiKey: 'my-key',
      apiSecret: 'my-secret',
      key: 'my-file-key',
      data: fileData,
    });
  })