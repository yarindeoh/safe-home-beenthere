import React from 'react';
import { withRoute } from 'services/routing/routerHOC';
import { Input } from 'components/Input';
import { TextArea } from 'components/TextArea';
import { useTranslation } from 'react-i18next';
import WarningIcon from 'src/media/icons/warning.svg';

export const ModerationForm = withRoute(
    ({ handleSubmit, handleFieldChange, formData, disabled, id }) => {
        const { t } = useTranslation();

        return (
            <div className={'testimony-form'}>
                <form
                    onSubmit={!disabled ? handleSubmit : undefined}
                    id={id}
                    className={'addStoryForm'}
                >
                    <div className="name-and-contact-container">
                        <TextArea
                            name="name"
                            labelClass={disabled ? 'original-align-text' : ''}
                            containerClass="name-container"
                            textWrapperClass="name-wrapper-text edit-border-radius"
                            textClass="name-text"
                            label={t('moderation.nameLabel')}
                            value={formData?.name}
                            onChange={e => handleFieldChange(e, 'name')}
                            disabled={disabled}
                            required
                        />
                        {!disabled && formData?.mail && (
                            <TextArea
                                containerClass="contact-container"
                                textWrapperClass={`${formData?.contact? 'contact-wrapper-text edit-border-radius' : 'disabled-text-area'}`}
                                textClass={`${formData?.contact? 'contact-text' : 'disabled-text-area'}`}
                                name="contactAt"
                                label={formData?.contact ? t('moderation.contactAtLabel', {
                                    mail: formData?.mail
                                }): formData?.mail}
                                icon={formData?.contact ? <WarningIcon />: undefined}
                                // value={formData?.contactAt} //change to validated field
                                defaultValue={formData?.contact ? 'ביום ראשון בשעה 17:00' : ""} //change to validated field
                                // onChange={e => handleFieldChange(e, 'contactAt')}
                                disabled={disabled}
                                required
                            />
                        )}
                    </div>
                    {formData?.background && (
                        <TextArea
                            name="background"
                            textWrapperClass="edit-border-radius"
                            labelClass={disabled ? 'original-align-text' : ''}
                            label={t('addStoryView.backgroundLabel')}
                            value={formData?.background}
                            onChange={e => handleFieldChange(e, 'background')}
                            disabled={disabled}
                            required
                        />
                    )}
                    {formData?.storyContent && (
                        <TextArea
                            name="storyContent"
                            textWrapperClass="edit-border-radius"
                            labelClass={disabled ? 'original-align-text' : ''}
                            label={t('addStoryView.storyContentLabel')}
                            value={formData?.storyContent}
                            onChange={e => handleFieldChange(e, 'storyContent')}
                            disabled={disabled}
                            required
                        />
                    )}
                    {formData?.howDidYouManged && (
                        <TextArea
                            name="howDidYouManged"
                            textWrapperClass="edit-border-radius"
                            labelClass={disabled ? 'original-align-text' : ''}
                            label={t('addStoryView.howDidYouMangedLabel')}
                            value={formData?.howDidYouManged}
                            onChange={e =>
                                handleFieldChange(e, 'howDidYouManged')
                            }
                            disabled={disabled}
                        />
                    )}
                    {formData?.whatHelpedYou && (
                        <TextArea
                            name="whatHelpedYou"
                            textWrapperClass="edit-border-radius"
                            labelClass={disabled ? 'original-align-text' : ''}
                            label={t('addStoryView.whatHelpedYouLabel')}
                            value={formData?.whatHelpedYou}
                            onChange={e =>
                                handleFieldChange(e, 'whatHelpedYou')
                            }
                            disabled={disabled}
                        />
                    )}
                    {formData?.whatTriggeredChange && (
                        <TextArea
                            name="whatTriggeredChange"
                            textWrapperClass="edit-border-radius"
                            labelClass={disabled ? 'original-align-text' : ''}
                            label={t('addStoryView.whatTriggeredChangeLabel')}
                            value={formData?.whatTriggeredChange}
                            onChange={e =>
                                handleFieldChange(e, 'whatTriggeredChange')
                            }
                            disabled={disabled}
                        />
                    )}
                    {formData?.additionalnfo && (
                        <TextArea
                            name="additionalnfo"
                            textWrapperClass="edit-border-radius"
                            labelClass={disabled ? 'original-align-text' : ''}
                            label={t('addStoryView.additionalnfoLabel')}
                            value={formData?.additionalnfo}
                            onChange={e =>
                                handleFieldChange(e, 'additionalnfo')
                            }
                            disabled={disabled}
                        />
                    )}
                </form>
            </div>
        );
    }
);