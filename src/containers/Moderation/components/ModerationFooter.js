import React from 'react';
import { useTranslation } from 'react-i18next';

export const ModerationFooter = ({ handlePublish, showRemoveButton }) => {
    const { t } = useTranslation();

    return (
        <div className="moderation-footer">
            <input
                className="moderation-submit-button"
                form="EditOriginalStoryView"
                type="submit"
                value={t('moderation.submitText')}
            />
            {showRemoveButton && (
                <button
                    className="moderation-unPublish-button"
                    onClick={() => handlePublish(false)}
                >
                    {t('moderation.unPublishText')}
                </button>
            )}
        </div>
    );
};