// components
import { PageErrorDialog } from '@/lib/components/feedback';
import { SimpleMap } from '@/lib/components/maps';
// services
import { getAddresses } from '@/lib/services/getAddresses';
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';
// @types
import { ISolar } from '@/lib/@types/solar';
//
import { recognizeAddress } from '@/lib/utils/recognize-address';
import { IAddress } from '@/lib/@types/address';

// ----------------------------------------------------------------------

// Cache google api data
export async function generateStaticParams() {
  // const addresses = await getAddresses();

  const _addresses = JSON.parse("{\"addresses\":[{\"uuid\":\"539478eb-6491-48d7-84c3-78f6fc550779\",\"zipcode\":\"79830-150\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Avenida Marcelino Pires\",\"description\":\"Shopping Avenida Center\",\"neighbourhood\":\"Jardim Paulista\",\"streetNumber\":\"3600\",\"latitude\":\"-22.2265335\",\"longitude\":\"-54.7937397\",\"createdAt\":\"2023-09-08T20:56:43.061Z\"},{\"uuid\":\"4feba62e-5d2a-404e-abd7-8a76cd25cf82\",\"zipcode\":\"79826-110\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Rua Toshinobu Katayama\",\"description\":\"Delta Sistemas\",\"neighbourhood\":\"Vila Planalto\",\"streetNumber\":\"1742\",\"latitude\":\"-22.2159848\",\"longitude\":\"-54.8054409\",\"createdAt\":\"2023-09-08T20:50:49.422Z\"},{\"uuid\":\"d8c539bc-68d1-4e90-982a-5b3c420d9ad6\",\"zipcode\":\"79840-630\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Avenida Marcelino Pires\",\"description\":\"Geração Solar\",\"neighbourhood\":\"Jardim Caramuru\",\"streetNumber\":\"3275\",\"latitude\":\"-22.2260894\",\"longitude\":\"-54.7972068\",\"createdAt\":\"2023-09-08T20:53:14.656Z\"},{\"uuid\":\"3a08f5da-1a6d-4967-93bd-b587bbed0261\",\"zipcode\":\"01310-200\",\"state\":\"SP\",\"city\":\"São Paulo\",\"streetName\":\"Avenida Paulista\",\"description\":\"MASP\",\"neighbourhood\":\"Bela Vista\",\"streetNumber\":\"1578\",\"latitude\":\"-23.5615171\",\"longitude\":\"-46.655961\",\"createdAt\":\"2023-09-08T20:58:11.035Z\"},{\"uuid\":\"d13eea39-cdf8-41f0-891d-bc3844aee4a3\",\"zipcode\":\"88353-100\",\"state\":\"SC\",\"city\":\"Brusque\",\"streetName\":\"Rodovia Deputado Antônio Heil\",\"description\":\"Havan 1\",\"neighbourhood\":\"Centro II\",\"streetNumber\":\"200\",\"latitude\":\"-27.100028\",\"longitude\":\"-48.90682839999999\",\"createdAt\":\"2023-09-08T21:01:10.145Z\"},{\"uuid\":\"5f96733b-92de-4d1d-8d7d-04db7574a218\",\"zipcode\":\"57045-365\",\"state\":\"AL\",\"city\":\"Maceió\",\"streetName\":\"Avenida Juca Sampaio\",\"description\":\"Americanas Maceió\",\"neighbourhood\":\"Barro Duro\",\"streetNumber\":\"2178\",\"latitude\":\"-9.626650099999999\",\"longitude\":\"-35.7172677\",\"createdAt\":\"2023-09-08T21:03:22.794Z\"},{\"uuid\":\"ed866dd8-fdfb-4768-8a0d-0c16c42b3392\",\"zipcode\":\"90810-080\",\"state\":\"RS\",\"city\":\"Porto Alegre\",\"streetName\":\"Avenida Diário de Notícias\",\"description\":\"Shopping Barra Sul\",\"neighbourhood\":\"Cristal\",\"streetNumber\":\"300\",\"latitude\":\"-30.0846697\",\"longitude\":\"-51.2458384\",\"createdAt\":\"2023-09-08T21:04:57.163Z\"},{\"uuid\":\"506a8dc5-5c4b-4210-8254-bad3bfcf2f7d\",\"zipcode\":\"79800-021\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Avenida Weimar Gonçalves Torres\",\"description\":\"Dio Santo Pizzaria\",\"neighbourhood\":\"Centro\",\"streetNumber\":\"1285\",\"latitude\":\"-22.2271332\",\"longitude\":\"-54.8178084\",\"createdAt\":\"2023-09-08T21:06:09.207Z\"},{\"uuid\":\"a2202f80-dc24-493d-bc1c-250d36d2153d\",\"zipcode\":\"79051-000\",\"state\":\"MS\",\"city\":\"Campo Grande\",\"streetName\":\"Avenida Eduardo Elias Zahran\",\"description\":\"Geração Solar CG\",\"neighbourhood\":\"Jardim TV Morena\",\"streetNumber\":\"1828\",\"latitude\":\"-20.4785341\",\"longitude\":\"-54.597859\",\"createdAt\":\"2023-09-08T21:07:52.624Z\"}]}");
  const addresses = _addresses.addresses as IAddress[];

  return addresses.map((address) => ({
    uuid: address.uuid
  }));
};

export default async function AddressDetailsPage({
  params,
}: {
  params: { uuid: string }
}
) {
  const { uuid } = params;

  // Data is already in cache
  // const addresses = await getAddresses();
  const _addresses = JSON.parse("{\"addresses\":[{\"uuid\":\"539478eb-6491-48d7-84c3-78f6fc550779\",\"zipcode\":\"79830-150\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Avenida Marcelino Pires\",\"description\":\"Shopping Avenida Center\",\"neighbourhood\":\"Jardim Paulista\",\"streetNumber\":\"3600\",\"latitude\":\"-22.2265335\",\"longitude\":\"-54.7937397\",\"createdAt\":\"2023-09-08T20:56:43.061Z\"},{\"uuid\":\"4feba62e-5d2a-404e-abd7-8a76cd25cf82\",\"zipcode\":\"79826-110\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Rua Toshinobu Katayama\",\"description\":\"Delta Sistemas\",\"neighbourhood\":\"Vila Planalto\",\"streetNumber\":\"1742\",\"latitude\":\"-22.2159848\",\"longitude\":\"-54.8054409\",\"createdAt\":\"2023-09-08T20:50:49.422Z\"},{\"uuid\":\"d8c539bc-68d1-4e90-982a-5b3c420d9ad6\",\"zipcode\":\"79840-630\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Avenida Marcelino Pires\",\"description\":\"Geração Solar\",\"neighbourhood\":\"Jardim Caramuru\",\"streetNumber\":\"3275\",\"latitude\":\"-22.2260894\",\"longitude\":\"-54.7972068\",\"createdAt\":\"2023-09-08T20:53:14.656Z\"},{\"uuid\":\"3a08f5da-1a6d-4967-93bd-b587bbed0261\",\"zipcode\":\"01310-200\",\"state\":\"SP\",\"city\":\"São Paulo\",\"streetName\":\"Avenida Paulista\",\"description\":\"MASP\",\"neighbourhood\":\"Bela Vista\",\"streetNumber\":\"1578\",\"latitude\":\"-23.5615171\",\"longitude\":\"-46.655961\",\"createdAt\":\"2023-09-08T20:58:11.035Z\"},{\"uuid\":\"d13eea39-cdf8-41f0-891d-bc3844aee4a3\",\"zipcode\":\"88353-100\",\"state\":\"SC\",\"city\":\"Brusque\",\"streetName\":\"Rodovia Deputado Antônio Heil\",\"description\":\"Havan 1\",\"neighbourhood\":\"Centro II\",\"streetNumber\":\"200\",\"latitude\":\"-27.100028\",\"longitude\":\"-48.90682839999999\",\"createdAt\":\"2023-09-08T21:01:10.145Z\"},{\"uuid\":\"5f96733b-92de-4d1d-8d7d-04db7574a218\",\"zipcode\":\"57045-365\",\"state\":\"AL\",\"city\":\"Maceió\",\"streetName\":\"Avenida Juca Sampaio\",\"description\":\"Americanas Maceió\",\"neighbourhood\":\"Barro Duro\",\"streetNumber\":\"2178\",\"latitude\":\"-9.626650099999999\",\"longitude\":\"-35.7172677\",\"createdAt\":\"2023-09-08T21:03:22.794Z\"},{\"uuid\":\"ed866dd8-fdfb-4768-8a0d-0c16c42b3392\",\"zipcode\":\"90810-080\",\"state\":\"RS\",\"city\":\"Porto Alegre\",\"streetName\":\"Avenida Diário de Notícias\",\"description\":\"Shopping Barra Sul\",\"neighbourhood\":\"Cristal\",\"streetNumber\":\"300\",\"latitude\":\"-30.0846697\",\"longitude\":\"-51.2458384\",\"createdAt\":\"2023-09-08T21:04:57.163Z\"},{\"uuid\":\"506a8dc5-5c4b-4210-8254-bad3bfcf2f7d\",\"zipcode\":\"79800-021\",\"state\":\"MS\",\"city\":\"Dourados\",\"streetName\":\"Avenida Weimar Gonçalves Torres\",\"description\":\"Dio Santo Pizzaria\",\"neighbourhood\":\"Centro\",\"streetNumber\":\"1285\",\"latitude\":\"-22.2271332\",\"longitude\":\"-54.8178084\",\"createdAt\":\"2023-09-08T21:06:09.207Z\"},{\"uuid\":\"a2202f80-dc24-493d-bc1c-250d36d2153d\",\"zipcode\":\"79051-000\",\"state\":\"MS\",\"city\":\"Campo Grande\",\"streetName\":\"Avenida Eduardo Elias Zahran\",\"description\":\"Geração Solar CG\",\"neighbourhood\":\"Jardim TV Morena\",\"streetNumber\":\"1828\",\"latitude\":\"-20.4785341\",\"longitude\":\"-54.597859\",\"createdAt\":\"2023-09-08T21:07:52.624Z\"}]}");
  const addresses = _addresses.addresses;

  // Verify if uuid is valid
  const address = recognizeAddress(addresses, uuid);

  // Show error modal when address is not valid
  if (address === null)
    return (
      <PageErrorDialog
        title="Erro"
        content="O endereço não foi encontrado"
        redirectTo="/"
      />
    );

  const solarInfo: ISolar | null = await getSolarInformationsByAddress(Number(address.latitude), Number(address.longitude));

  return (
    <SimpleMap addresses={addresses} selectedAddress={address} solarInfo={solarInfo} />
  );
}