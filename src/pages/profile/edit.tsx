import UserIcon from '@/assets/svg/user.svg';
import DeleteIcon from '@/assets/svg/delete-all.svg';
import { useRouter } from 'next/router';
import { useForm, UseFormRegisterReturn } from 'react-hook-form';
import Left from '@/assets/svg/left.svg';

interface FieldProps {
  title: string;
  essential?: boolean;
  register: UseFormRegisterReturn;
}

function Field({ title, essential = false, register }: FieldProps) {
  return (
    <div className="flex flex-col gap-5 border-solid text-[16px]">
      <div className="font-semibold">
        {title}
        {essential && <span className="text-[#dc5b5b]">*</span>}
      </div>
      <label
        className="flex h-[32px] items-center rounded-[6px] border-[1px] border-solid border-[#b4b4b4] px-2 font-medium"
        htmlFor={title}
      >
        <input id={title} className="flex-grow h-full" type="text" {...register} />
        <button type="button">
          <DeleteIcon className="size-[20px]" />
        </button>
      </label>
    </div>
  );
}

export default function Edit() {
  const router = useRouter();
  console.log(router.query);

  const { register } = useForm({
    defaultValues: {
      nickName: router.query.nickName,
      phone: router.query.phone,
      account: router.query.account,
    },
  });

  return (
    <>
      <div className="h-[50px] w-full">
        <div className="fixed top-0 flex h-[50px] w-full max-w-md justify-between bg-[#f7f7f7] p-3">
          <button onClick={() => router.back()}>
            <Left />
          </button>
          <button className="text-[20px] text-[#3160d8]" onClick={() => router.back()}>
            저장
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-5 pt-10">
        <div className="flex flex-col items-center gap-5">
          <UserIcon className="size-[110px]" />
          <div className="text-[24px] font-semibold">
            XXX <span className="ml-2 font-medium">님</span>
          </div>
        </div>
        <div className="group flex min-h-[60vh] w-full flex-grow flex-col gap-10 rounded-[20px] bg-white px-5 py-10">
          <Field title="닉네임" essential register={register('nickName')} />
          <Field title="전화번호" essential register={register('phone')} />
          <Field title="계좌번호" essential register={register('account')} />
        </div>
      </div>
    </>
  );
}
