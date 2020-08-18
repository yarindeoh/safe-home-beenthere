import React, { useContext } from 'react';
import { withRoute } from 'services/routing/routerHOC';
import { Input } from 'components/Input';
import { Radio } from 'components/Radio';
import { TextArea } from 'components/TextArea';
import { useTranslation } from 'react-i18next';
import { AddStoryContext } from './addStoryContext';
import { useCheckedContact, useFiledChange, useSubmit, useBack } from './addStoryHooks';
import BackArrowIcon from 'src/media/icons/backArrow.svg';

export const AddStoryView = withRoute(props => {
    const { t } = useTranslation();
    const {addStoryData} = useContext(AddStoryContext)
    const { checkedContact, handleCheckedContact } = useCheckedContact();
    const { handleFiledChange } = useFiledChange();
    const { submitted, setSubmitted, handleSubmit } = useSubmit()
    const { back } = useBack(props, setSubmitted)
    
    return (
        <>
        {submitted ? 
            <div id={'testimony-form'} >
                <div className="submitted-success-heading">{t('addStoryView.submittedSuccessHeading')}</div>
                <div className="submitted-success-text">{t('addStoryView.submittedSuccessText')}</div>
                <button className={'submit-button'} onClick={back}>{t('backFromForm')}</button>
            </div> 
            :
            <div id={'testimony-form'}>
                <header>
                    <BackArrowIcon className={'back-arrow-icon'} onClick={back}/>
                    <h1>{t('addStoryView.myConfession')}</h1>
                </header>
                <button className={'BTN-accessibility'} />
                <h3>{t('addStoryView.anonymity')}</h3>
                <form onSubmit={handleSubmit} id={"addStoryForm"}>
                    <Input
                        name="name"
                        label={t('addStoryView.nameLabel')}
                        placeholder={t('addStoryView.namePlaceholder')}
                        value={addStoryData.name}
                        onChange={(e)=>handleFiledChange(e, "name")}
                        required
                    />
                    <Input
                        name="mail"
                        label={t('addStoryView.emailLabel')}
                        placeholder={t('addStoryView.emailPlaceholder')}
                        value={addStoryData.mail}
                        onChange={(e)=>handleFiledChange(e, "mail")}
                    />
                    <Radio
                        name="contact"
                        label={t('addStoryView.contactLabel')}
                        notes={t('addStoryView.contactNotes')}
                        checked={checkedContact}
                        options={[
                            { value: 'yes', label: t('common.yes') },
                            { value: 'no', label: t('common.no') }
                        ]}
                        onClick={(e)=>handleCheckedContact(e)}
                    />

                    <TextArea
                        name="background"
                        placeholder=""
                        label={t('background')}
                        value={addStoryData.background}
                        onChange={(e)=>handleFiledChange(e, "background")}
                        required
                    />

                    <TextArea
                        name="storyContent"
                        label={t('storyContent')}
                        placeholder={t('storyContentPlaceholder')}
                        value={addStoryData.storyContent}
                        onChange={(e)=>handleFiledChange(e, "storyContent")}
                        required
                    />
                    <TextArea
                        name="howDidYouManged"
                        label={t('howDidYouManged')}
                        placeholder={t('howDidYouMangedPlaceholder')}
                        value={addStoryData.howDidYouManged}
                        onChange={(e)=>handleFiledChange(e, "howDidYouManged")}
                    />

                    <TextArea
                        name="whatHelpedYou"
                        label={t('whatHelpedYou')}
                        placeholder={t('whatHelpedYouPlaceHolder')}
                        value={addStoryData.whatHelpedYou}
                        onChange={(e)=>handleFiledChange(e, "whatHelpedYou")}
                    />

                    <TextArea
                        name="whatTriggeredChange"
                        label={t('whatTriggeredChange')}
                        placeholder={t('whatTriggeredChangePlaceHolder')}
                        value={addStoryData.whatTriggeredChange}
                        onChange={(e)=>handleFiledChange(e, "whatTriggeredChange")}
                    />

                    <TextArea
                        name="quote"
                        label={t('quote')}
                        placeholder={t('quotePlaceHolder')}
                        value={addStoryData.quote}
                        onChange={(e)=>handleFiledChange(e, "quote")}
                    />

                    <TextArea
                        name="additionalnfo"
                        placeholder={t('additionalnfoPlaceHolder')}
                        label={t('additionalnfo')}
                        value={addStoryData.additionalnfo}
                        onChange={(e)=>handleFiledChange(e, "additionalnfo")}
                    />
                    <input className="submit-button" type="submit" value={t('submitForm')}></input>
                </form>
            </div>
        }
        </>
    );
});
