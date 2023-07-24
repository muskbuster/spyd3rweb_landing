import Link from 'next/link';

export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
};

interface EmailLinkProps {
  email: string;
  text: string;
}

function EmailLink({ email, text }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-blue-500 hover:text-blue-700"
    >
      {text}
    </a>
  );
}

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We will be releasing more details Soon </h1>
          </div>
          {/* Contact info */}
          <div className="text-center">
            <p className="text-lg">Contact us for more info:</p>
            <p>
              <EmailLink email="sudeep@spyd3rw3b.tech" text="sudeep@spyd3rw3b.tech" />
            </p>
            <p>
              <EmailLink email="shreyaspadmakiran@spyd3rw3b.tech" text="shreyaspadmakiran@spyd3rw3b.tech" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
