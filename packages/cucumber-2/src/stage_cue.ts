import { defineSupportCode } from 'cucumber';
import { serenity } from 'serenity-js';

// wait for any tasks outstanding after the previous scenario
// see https://github.com/angular/protractor/issues/4087

defineSupportCode(({ Before, After }) => {
    Before({ timeout: serenity.config.stageCueTimeout }, () => serenity.stageManager().waitForNextCue());
});
