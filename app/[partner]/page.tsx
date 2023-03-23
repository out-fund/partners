interface PartnerPageProps {
  params: {
    partner: string;
  };
}

// export const metadata = {
//   title: `Partner Page - ${params.partner}`,
// };

export async function generateMetadata({ params }: PartnerPageProps) {
  return { title: `Partner Page - ${params.partner}` };
}

export default function PartnerPage({ params }: PartnerPageProps) {
  return <main>Partner {decodeURI(params.partner)}</main>;
}

// export default function PartnerPage({
//   params,
// }: {
//   params: { partner: string };
// }) {
//   return <main>Partner {params.partner}</main>;
// }
