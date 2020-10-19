import React from 'react';
import { withRoute } from 'services/routing/routerHOC';
import { Input } from 'components/Input';
import { Radio } from 'components/Radio';
import { TextArea } from 'components/TextArea';
import { useTranslation } from 'react-i18next';
import { useCheckedContact } from 'containers/AddStory/addStoryHooks';

export const TestimonyForm = withRoute(
    ({
        handleSubmit,
        handleFiledChange,
        formData,
        disabled,
        moderatedForm
    }) => {
        const { t } = useTranslation();
        const { checkedContact, handleCheckedContact } = useCheckedContact();

        return (
            <>
                <div id={'testimony-form'}>
                    <form onSubmit={!disabled ? handleSubmit : undefined}>
                        {formData?.createdAt && (
                            <div>
                                <div>{`${t('addStoryView.createdAtLabel')}  ${
                                    formData.createdAt
                                }`}</div>
                            </div>
                        )}
                        <Input
                            name="name"
                            label={t('addStoryView.nameLabel')}
                            placeholder={t('addStoryView.namePlaceholder')}
                            value={formData?.name}
                            onChange={e => handleFiledChange(e, 'name')}
                            disabled={disabled}
                            required
                        />
                        <Input
                            name="mail"
                            label={t('addStoryView.mailLabel')}
                            placeholder={t('addStoryView.mailPlaceholder')}
                            value={formData?.mail}
                            onChange={e => handleFiledChange(e, 'mail')}
                            disabled={disabled}
                        />
                        {!moderatedForm && (
                            <Radio
                                name="contact"
                                label={t('addStoryView.contactLabel')}
                                notes={t('addStoryView.contactNotes')}
                                checked={checkedContact}
                                options={[
                                    { value: 'yes', label: t('common.yes') },
                                    { value: 'no', label: t('common.no') }
                                ]}
                                onClick={e => handleCheckedContact(e)}
                                disabled={disabled}
                            />
                        )}

                        <TextArea
                            name="background"
                            placeholder=""
                            label={t('addStoryView.backgroundLabel')}
                            value={formData?.background}
                            onChange={e => handleFiledChange(e, 'background')}
                            disabled={disabled}
                            required
                        />

                        <TextArea
                            name="storyContent"
                            label={t('addStoryView.storyContentLabel')}
                            placeholder={t(
                                'addStoryView.storyContentPlaceholder'
                            )}
                            value={formData?.storyContent}
                            onChange={e => handleFiledChange(e, 'storyContent')}
                            disabled={disabled}
                            required
                        />
                        <TextArea
                            name="howDidYouManged"
                            label={t('addStoryView.howDidYouMangedLabel')}
                            placeholder={t(
                                'addStoryView.howDidYouMangedPlaceholder'
                            )}
                            value={formData?.howDidYouManged}
                            onChange={e =>
                                handleFiledChange(e, 'howDidYouManged')
                            }
                            disabled={disabled}
                        />

                        <TextArea
                            name="whatHelpedYou"
                            label={t('addStoryView.whatHelpedYouLabel')}
                            placeholder={t(
                                'addStoryView.whatHelpedYouPlaceHolder'
                            )}
                            value={formData?.whatHelpedYou}
                            onChange={e =>
                                handleFiledChange(e, 'whatHelpedYou')
                            }
                            disabled={disabled}
                        />

                        <TextArea
                            name="whatTriggeredChange"
                            label={t('addStoryView.whatTriggeredChangeLabel')}
                            placeholder={t(
                                'addStoryView.whatTriggeredChangePlaceHolder'
                            )}
                            value={formData?.whatTriggeredChange}
                            onChange={e =>
                                handleFiledChange(e, 'whatTriggeredChange')
                            }
                            disabled={disabled}
                        />

                        <TextArea
                            name="additionalnfo"
                            label={t('addStoryView.additionalnfoLabel')}
                            placeholder={t(
                                'addStoryView.additionalnfoPlaceHolder'
                            )}
                            value={formData?.additionalnfo}
                            onChange={e =>
                                handleFiledChange(e, 'additionalnfo')
                            }
                            disabled={disabled}
                        />

                        {moderatedForm && (
                            <TextArea
                                name="quote"
                                label={t('addStoryView.quoteLabel')}
                                placeholder={t('addStoryView.quotePlaceHolder')}
                                value={formData?.quote}
                                onChange={e => handleFiledChange(e, 'quote')}
                                disabled={disabled}
                            />
                        )}

                        {!disabled && (
                            <input
                                className="submit-button"
                                type="submit"
                                value={
                                    moderatedForm
                                        ? t('moderation.submitText')
                                        : t('submitForm')
                                }
                            ></input>
                        )}
                    </form>
                </div>
            </>
        );
    }
);