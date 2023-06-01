import * as React from 'react'

import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTelegram} from '@react-icons/all-files/fa/FaTelegram'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
          >
            <FaMastodon />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.telegram && (
          <a
            className={styles.telegram}
            href={`https://t.me/${config.telegram}`}
            title={`Telegram @${config.telegram}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegram />
          </a>
        )}
        
        {config.lens && (
          <a
            className={styles.lens}
            href={`https://lenster.xyz/u/${config.lens}`}
            title={`Lens @${config.lens}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg stroke='currentColor' fill='currentColor'  width="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M.67 5.268c-.057.772.215 1.504.776 2.11.051.056.104.113.16.17 2.572 2.643 5.93 2.673 6.082 2.673.153 0 3.51-.03 6.083-2.673.055-.056.108-.113.16-.169.56-.607.833-1.338.775-2.111a2.967 2.967 0 0 0-.85-1.84c-.495-.508-1.131-.823-1.795-.875a2.51 2.51 0 0 0-1.65.457 2.654 2.654 0 0 0-.849-1.52A2.82 2.82 0 0 0 7.688.803a2.82 2.82 0 0 0-1.873.687 2.65 2.65 0 0 0-.85 1.52 2.534 2.534 0 0 0-1.648-.457c-.664.052-1.303.365-1.798.875a2.98 2.98 0 0 0-.849 1.84Zm1.442 1.479c-.43-.468-.567-.972-.526-1.436.042-.469.268-.909.583-1.232.35-.36.837-.604 1.345-.604.4 0 .83.15 1.237.547a7.173 7.173 0 0 1 .256.263l.492.533.355.385-.013-.523-.02-.74v-.005a2.992 2.992 0 0 1-.001-.257l.001-.11c.019-.643.27-1.098.615-1.393.35-.3.81-.446 1.253-.446.444 0 .903.146 1.254.446.346.296.597.751.615 1.396v.003a5.237 5.237 0 0 1 0 .286v.001l-.001.086-.02.733-.013.525.356-.387.491-.536.108-.115a5.72 5.72 0 0 1 .146-.146c.456-.442.944-.58 1.39-.539.453.043.879.273 1.193.597.315.323.54.763.583 1.232.041.464-.096.968-.526 1.436l-.142.15c-1.149 1.18-2.5 1.78-3.573 2.086-.536.152-1.001.23-1.333.27-.165.02-.297.03-.389.036-.091.006-.14.006-.14.006s-.049 0-.14-.006a6.47 6.47 0 0 1-.388-.035 8.697 8.697 0 0 1-1.33-.27C4.757 8.68 3.405 8.08 2.253 6.898l-.142-.15Z" strokeWidth="0.394"></path>
            <path d="M12.447 15.182c.797.001 1.583-.179 2.304-.526l.174-.084-.08-.176-.223-.482-.084-.181-.18.086a4.396 4.396 0 0 1-2.898.325 4.363 4.363 0 0 1-1.457-.629c.137.017.275.025.413.024m2.031 1.643A5.331 5.331 0 0 1 8.23 13.1V13.1l-.004-.005-.001-.001a4.913 4.913 0 0 1-.096-.134v2.213H7.217v-2.215c-.031.045-.064.09-.097.135l-.001.002-.003.004-.001.002a5.331 5.331 0 0 1-4.218 2.082m9.55 0v-.197.197Zm-9.55 0v-.197m0 .197v-.197m0 .197c-.796 0-1.583-.18-2.303-.527l-.174-.084.08-.175.222-.482.083-.182.181.087c.905.435 1.924.55 2.898.324a4.361 4.361 0 0 0 1.456-.628 3.302 3.302 0 0 1-.412.024m-2.031 1.446a5.091 5.091 0 0 1-2.217-.507l6.279-1.499a5.134 5.134 0 0 1-4.062 2.006Zm2.03-1.446a3.655 3.655 0 0 1-2.154-.707l-.156-.114.11-.158.303-.433.116-.166.163.121c.76.566 1.808.696 2.623.318.79-.365 1.255-1.15 1.284-2.27v-.569H8.128V10.133c.031 1.118.496 1.902 1.284 2.267.815.378 1.861.247 2.624-.317l.162-.12.116.166.303.433.11.158-.155.113c-.63.46-1.383.706-2.156.706m-5.488 0v-.197.197Zm5.488 0v-.197.197Z" strokeWidth="0.394"></path></svg>
            {/* <svg width="1em" height="1em" viewBox='0 0 496 512' strokeWidth="0" fill='currentColor' stroke='currentColor'  xmlns="http://www.w3.org/2000/svg">
              <path d="M.67 5.268c-.057.772.215 1.504.776 2.11.051.056.104.113.16.17 2.572 2.643 5.93 2.673 6.082 2.673.153 0 3.51-.03 6.083-2.673.055-.056.108-.113.16-.169.56-.607.833-1.338.775-2.111a2.967 2.967 0 0 0-.85-1.84c-.495-.508-1.131-.823-1.795-.875a2.51 2.51 0 0 0-1.65.457 2.654 2.654 0 0 0-.849-1.52A2.82 2.82 0 0 0 7.688.803a2.82 2.82 0 0 0-1.873.687 2.65 2.65 0 0 0-.85 1.52 2.534 2.534 0 0 0-1.648-.457c-.664.052-1.303.365-1.798.875a2.98 2.98 0 0 0-.849 1.84Zm1.442 1.479c-.43-.468-.567-.972-.526-1.436.042-.469.268-.909.583-1.232.35-.36.837-.604 1.345-.604.4 0 .83.15 1.237.547a7.173 7.173 0 0 1 .256.263l.492.533.355.385-.013-.523-.02-.74v-.005a2.992 2.992 0 0 1-.001-.257l.001-.11c.019-.643.27-1.098.615-1.393.35-.3.81-.446 1.253-.446.444 0 .903.146 1.254.446.346.296.597.751.615 1.396v.003a5.237 5.237 0 0 1 0 .286v.001l-.001.086-.02.733-.013.525.356-.387.491-.536.108-.115a5.72 5.72 0 0 1 .146-.146c.456-.442.944-.58 1.39-.539.453.043.879.273 1.193.597.315.323.54.763.583 1.232.041.464-.096.968-.526 1.436l-.142.15c-1.149 1.18-2.5 1.78-3.573 2.086-.536.152-1.001.23-1.333.27-.165.02-.297.03-.389.036-.091.006-.14.006-.14.006s-.049 0-.14-.006a6.47 6.47 0 0 1-.388-.035 8.697 8.697 0 0 1-1.33-.27C4.757 8.68 3.405 8.08 2.253 6.898l-.142-.15Z"></path>
              <path d="M12.447 15.182c.797.001 1.583-.179 2.304-.526l.174-.084-.08-.176-.223-.482-.084-.181-.18.086a4.396 4.396 0 0 1-2.898.325 4.363 4.363 0 0 1-1.457-.629c.137.017.275.025.413.024m2.031 1.643A5.331 5.331 0 0 1 8.23 13.1V13.1l-.004-.005-.001-.001a4.913 4.913 0 0 1-.096-.134v2.213H7.217v-2.215c-.031.045-.064.09-.097.135l-.001.002-.003.004-.001.002a5.331 5.331 0 0 1-4.218 2.082m9.55 0v-.197.197Zm-9.55 0v-.197m0 .197v-.197m0 .197c-.796 0-1.583-.18-2.303-.527l-.174-.084.08-.175.222-.482.083-.182.181.087c.905.435 1.924.55 2.898.324a4.361 4.361 0 0 0 1.456-.628 3.302 3.302 0 0 1-.412.024m-2.031 1.446a5.091 5.091 0 0 1-2.217-.507l6.279-1.499a5.134 5.134 0 0 1-4.062 2.006Zm2.03-1.446a3.655 3.655 0 0 1-2.154-.707l-.156-.114.11-.158.303-.433.116-.166.163.121c.76.566 1.808.696 2.623.318.79-.365 1.255-1.15 1.284-2.27v-.569H8.128V10.133c.031 1.118.496 1.902 1.284 2.267.815.378 1.861.247 2.624-.317l.162-.12.116.166.303.433.11.158-.155.113c-.63.46-1.383.706-2.156.706m-5.488 0v-.197.197Zm5.488 0v-.197.197Z"></path>
              </svg> */}
          </a>
        )}
        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
