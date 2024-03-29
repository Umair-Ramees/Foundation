import Box from 'components/base/Box';
import Paragraph from 'components/base/Paragraph';

import { FileUploadField } from '../FileUpload';
import FormBlock from 'components/forms/FormBlock';

export default function CreatorCoverFields(): JSX.Element {
  return (
    <FormBlock
      title="Upload a cover image"
      hintText={
        <Paragraph css={{ marginBottom: '$4' }}>
          Recommended size:
          <br /> 1500x500px.
          <br />
          JPG, PNG, or GIF.
          <br /> 10MB max size.
        </Paragraph>
      }
    >
      <Box>
        <Box css={{ marginBottom: '$2' }}>
          <FileUploadField<{ coverImageUrl: string }>
            name="coverImageUrl"
            // 10mb in bytes
            maxSize={10000000}
          />
        </Box>
      </Box>
    </FormBlock>
  );
}
