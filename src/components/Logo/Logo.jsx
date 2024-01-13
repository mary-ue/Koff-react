import logoSvg from './logo.svg';
import s from './Logo.module.scss';

export const Logo = () => {


  return (
    <a className={s.link} href="/">
      <img className={s.img} src={logoSvg} alt="Логотип мебельного маркета Koff" />
    </a>
  )
}