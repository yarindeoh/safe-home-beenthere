import React from 'react';
import { withRoute } from 'services/routing/routerHOC';
import LoginInput from 'containers/Moderation/components/LoginInput';
import { useTranslation } from 'react-i18next';
import { useModerationLoginSubmit } from 'containers/Moderation/moderationHooks';
import { useLoginFiledChange } from 'services/general/generalHooks';

export const LoginForm = withRoute(props => {
    const { t } = useTranslation();
    const { loginData, handleFieldChange } = useLoginFiledChange();
    const { handleModerationLogin } = useModerationLoginSubmit(loginData);

    return (
        <div className={'login-page'}>
            <div className={'login-card'}>
                <h3>{t('login.header')}</h3>
                <form onSubmit={handleModerationLogin}>
                    <LoginInput
                        name="userName"
                        type="text"
                        label={t('login.userName')}
                        value={loginData.userName}
                        onChange={e => handleFieldChange(e, 'userName')}
                        required
                    />
                    <LoginInput
                        name="password"
                        type="password"
                        label={t('login.password')}
                        value={loginData.password}
                        onChange={e => handleFieldChange(e, 'password')}
                        required
                    />
                    <div className={'separator'}></div>
                    <input
                        className="submit-button"
                        type="submit"
                        value={t('login.loginButtonText')}
                    ></input>
                </form>
            </div>
        </div>
    );
});

export default LoginForm;
