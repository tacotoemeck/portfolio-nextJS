import BaseLayout from '../../components/layout/BaseLayout';

export default function Widget() {
  return (
    <BaseLayout>
      <div className="h-screen w-screen">
        <iframe
          style={{ width: '100%', height: '100%' }}
          src="http://zidane.local.staging.matchpint.co.uk:3000/?id=6073"
        />
      </div>
    </BaseLayout>
  );
}
