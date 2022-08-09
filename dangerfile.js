import path from 'path';
import reassureDangerPlugin from 'reassure/plugins';

reassureDangerPlugin({
  inputFilePath: path.join(__dirname, '.reassure/output.md'),
});
