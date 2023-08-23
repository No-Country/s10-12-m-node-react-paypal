import Link from 'next/link';

export default function SubTitle({ subTitleText, linkText, linkUrl }) {
  return (
    <div className="items-center text-14px mb-12 hidden md:flex">
      <h3>{subTitleText}</h3>
      <Link className="text-Azul/800 underline ml-2 font-semibold" href={linkUrl}>
       {linkText}
      </Link>
    </div>
  );
}
