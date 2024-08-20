import Link from 'next/link';

const HOME_INDEX = [
  {
    id: '/roulette',
    title: '룰렛',
  },
  {
    id: '/dutch-pay',
    title: '더치페이',
  },
  {
    id: '/where-to-meet',
    title: '만날 위치',
  },
  {
    id: '/auth/login',
    title: '로그인',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-10 py-14">
      {HOME_INDEX.map(({ id, title }) => (
        <Link key={id} href={id}>
          <span className="text-4xl font-semibold">{title}</span>
        </Link>
      ))}
    </div>
  );
}
