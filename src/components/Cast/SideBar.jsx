import css from '../styled.module.css';

export const SideBar = () => {
  return (
    <div className={css.sideBar}>
      <div className={css.iconLogo}>
      <a className={css.logo}>
        <svg className={css.icon}>
          <use>

          </use>
        </svg>
        Task Pro
        </a>
      </div>
      <p className={css.sideBarText}>My boards</p>
      <svg className={css.lines}>
        <use>
        </use>
      </svg>
      <div className={css.sideBarNewB}>
        <p className={css.sideBarCreate}>Create a new board</p>
        <button type='button' className={css.buttonAdd}></button>
      </div>
      <svg className={css.lines}>
        <use>
        </use>
      </svg>
      <div className={css.editOff}>
        <svg className={css.projOff}>
        <use>
        </use>
        </svg>
        <p className={css.textOff}>Project office</p>
        <svg className={css.redactIcon}>
        <use>
        </use>
        </svg>
        <svg className={css.deleteIcon}>
        <use>
        </use>
        </svg>
        <svg className={css.lineCurrOff}>
        <use>
        </use>
        </svg>
      </div>
      <div className={css.myOff}>
      <svg className={css.iconCurr}>
        <use>
        </use>
      </svg>
        <p className={css.offCurr}>Neon Light Project</p>
      </div>
      <div className={css.needHelp}>
        <svg className={css.helpImg}>
        <use>
        </use>
        </svg>
        <p className={css.helpText}>If you need help with <span className={css.helpSpan}>TaskPro</span>, check out our support resources or reach out to our customer support team.</p>
        <a className={css.linkHelp}>
        <svg className={css.iconHelp}>
        <use>
        </use>
          </svg>
          <p className={css.linkHelpTxt}>Need help?</p>
          </a>
      </div>
        <a className={css.linkLogout}>
        <svg className={css.iconLogout}>
        <use>
        </use>
          </svg>
          <p className={css.logoutTxt}>Log out</p>
        </a>
      </div>
  );
};