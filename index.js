import {app, h} from 'hyperapp';
import osjs from 'osjs';
import {name as applicationName} from './metadata.json';
import {Box, BoxContainer, Button, Image, SelectField, Toolbar} from '@osjs/gui';

const register = (core, args, options, metadata) => {
  options.settings = {
    ran: false
  };
  const proc = core.make('osjs/application', {args, options, metadata});
  
  if(proc.settings.ran) {
    proc.destroy();
    return proc;
  }
  
  const { translatable } = core.make('osjs/locale');
  const _ = translatable(require('./locales.js'));
  
  const getLocales = () => core.config('languages', {en_EN: 'English'});
  
  const views = {
    'lang': (state,actions) => h(Box, { grow: 1, padding: false },[
      h(Box, {
        grow: 1,
        shrink: 1
      }, [
        h('h3', {}, [_('LANG_TITLE')]),
        h(BoxContainer, {}, [_('LANG_DESC')]),
        h(SelectField, {
          choices: getLocales(),
          value: state.language,
          oninput: (ev, value) => {
            actions.setOption({key: 'language', value});
            core.make('osjs/locale').setLocale(value);
          }
        }, [])
      ]),
      h(Toolbar, { justify: 'flex-end' }, [
        h(Button, { label: _('NEXT'), onclick: () => actions.setOption({ key: 'view', value: 'about' }) }, [])
      ])
    ]),
    'about': (state,actions) => h(Box, { grow: 1, padding: false }, [
      h(Box, {
        grow: 1,
        shrink: 1
      }, [
        h('h3', {}, [_('ABOUT_TITLE')]),
        h(BoxContainer, {}, [_('ABOUT_DESC')])
      ]),
      h(Toolbar, { justify: 'flex-end' }, [
        h(Button, { label: _('PREV'), onclick: () => actions.setOption({ key: 'view', value: 'lang' }) }, []),
        h(Button, { label: _('NEXT'), onclick: () => actions.setOption({ key: 'view', value: 'tutorial-panel' }) }, [])
      ])
    ]),
    'tutorial-panel': (state,actions) => h(Box, { grow: 1, padding: false }, [
      h(Box, {
        grow: 1,
        shrink: 1
      }, [
        h('h3', {}, [_('TUTORIAL_PANEL_TITLE')]),
        h(BoxContainer, {}, [_('TUTORIAL_PANEL_DESC')]),
        h(Image, { src: proc.resource('/images/panel.png') })
      ]),
      h(Toolbar, { justify: 'flex-end' }, [
        h(Button, { label: _('PREV'), onclick: () => actions.setOption({ key: 'view', value: 'about' }) }, []),
        h(Button, { label: _('NEXT'), onclick: () => {
          proc.settings.ran = true;
          proc.saveSettings().then(() => {
            proc.destroy();
          }).catch(err => core.make('osjs/dialog', 'alert', {
            title: err.name,
            message: err.message
          }, (btn, value) => {}));
        } }, [])
      ])
    ])
  };

  proc.createWindow({
    id: 'FirstBootWindow',
    title: _('WIN_TITLE'),
    dimension: { width: 400, height: 250 },
    position: 'center'
  }).on('destroy', () => proc.destroy()).render(($content, win) => {
    let hyperapp = app({
      view: 'lang',
      language: 'en_EN'
    }, {
      setOption: ({key, value}) => state => Object.assign({}, state, {[key]: value})
    }, (state,actions) => views[state.view], $content);
  });

  return proc;
};
osjs.register(applicationName, register);
