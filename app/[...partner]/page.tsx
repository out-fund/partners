interface PartnerPageProps {
  params: {
    partner: string;
  };
}

export default function PartnerPage({ params }: PartnerPageProps) {
  const { partner } = params;
  return <main>Partner {partner}</main>;
}
