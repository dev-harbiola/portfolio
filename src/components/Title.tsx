
const Title = (text: { title: string; subTitle: string }) => {
  return (
    <div className={`w-full flex items-center justify-center flex-col gap-4`}>
      <h2 className={'text-3xl'}>{text.title}</h2>
      <section className={'flex items-center justify-center gap-2'}>
        <div className={'w-[50px] border-2 border-emerald-500'}></div>
        <div className={'flex items-center justify-center gap-2'}>{text.subTitle}</div>
        <div className={'w-[50px] border-2 border-emerald-500'}></div>
      </section>
    </div>
  );
};

export default Title;
