import style from './style.module.css';

type DefaultIputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultIputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={style.input} id={id} type={type} {...rest} />
    </>
  );
}
