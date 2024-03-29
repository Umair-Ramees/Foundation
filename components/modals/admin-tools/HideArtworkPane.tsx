import { Formik, Form } from 'formik';

import Box from 'components/base/Box';
import Grid from 'components/base/Grid';
import CheckboxAndWrapper from 'components/forms/CheckboxAndWrapper';
import FormikSubmitButton from 'components/forms/FormikSubmitButton';

import {
  useUpdateArtworkHiddenAt,
  UpdateArtworkHiddenAtVariables,
} from 'graphql/server/mutations/update-artwork-hidden-at.generated';
import { useArtworkByUuid } from 'graphql/hasura/queries/artwork-by-uuid.generated';

import Account from 'types/Account';

interface HideArtworkPaneProps {
  user: Account;
  artworkId: string;
}

export default function HideArtworkPane(
  props: HideArtworkPaneProps
): JSX.Element {
  const { artworkId } = props;

  const {
    data: artwork,
    isLoading: isArtworkLoading,
    refetch: refetchArtwork,
  } = useArtworkByUuid(
    { id: artworkId },
    { enabled: Boolean(artworkId), select: (res) => res.artwork }
  );

  const { mutateAsync: updateArtworkHiddenAt } = useUpdateArtworkHiddenAt();

  const handleSubmit = async (values: UpdateArtworkHiddenAtVariables) => {
    await updateArtworkHiddenAt({
      id: values.id,
      hidden: values.hidden,
    });
    await refetchArtwork();
  };

  return (
    <Box css={{ padding: '$6' }}>
      <Formik<UpdateArtworkHiddenAtVariables>
        initialValues={{
          id: artwork?.id,
          hidden: Boolean(artwork?.hiddenAt),
        }}
        onSubmit={handleSubmit}
        enableReinitialize={!isArtworkLoading}
      >
        <Form>
          <Grid css={{ gap: '$4' }}>
            <CheckboxAndWrapper
              name="hidden"
              label="Artwork hidden"
              description="Should the NFT be hidden?"
            />

            <FormikSubmitButton
              label="Hide NFT"
              submittingLabel="Hiding NFT…"
              submittedLabel="NFT hidden"
            />
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
}
