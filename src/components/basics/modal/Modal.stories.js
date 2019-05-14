/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/design-system';

import Modal from './Modal';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  onClose: action('onClose'),
};

storiesOf('Frontpage|basics/modal/Modal', module)
  .addDecorator(storyFn => (
    <div style={{ width: '1200px', height: '800px', background: 'purple', color: 'white' }}>
      This is an example background {storyFn()}
    </div>
  ))
  .add('visible short', () => (
    <Modal isOpen {...actions}>
      {({ onClose }) => (
        <div style={{ background: 'papayawhip', fontSize: '12px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare
          tincidunt, justo velit ultrices est, eu porta libero ante malesuada ante. Maecenas
          fermentum ex nec justo tempor rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget,
          congue pharetra nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus
          sit amet, cursus porttitor sapien. Donec a massa et felis dictum eleifend. Etiam in dui at
          magna imperdiet gravida. Nam id tortor in leo facilisis elementum sit amet accumsan nunc.
          Maecenas lacus metus, dapibus aliquam mauris ac, luctus gravida ex.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare tincidunt, justo velit
          ultrices est, eu porta libero ante malesuada ante. Maecenas fermentum ex nec justo tempor
          rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget, congue pharetra nibh. Nulla
          eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus sit amet, cursus porttitor
          sapien. Donec a massa et felis dictum eleifend. Etiam in dui at magna imperdiet gravida.
          Nam id tortor in leo facilisis elementum sit amet accumsan nunc. Maecenas lacus metus,
          dapibus aliquam mauris ac, luctus gravida ex.{' '}
          <Button primary onClick={onClose} role="button" tabIndex="0">
            Close
          </Button>
        </div>
      )}
    </Modal>
  ))
  .add('visible tall', () => (
    <Modal isOpen {...actions}>
      {({ onClose }) => (
        <div style={{ background: 'papayawhip', fontSize: '36px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare
          tincidunt, justo velit ultrices est, eu porta libero ante malesuada ante. Maecenas
          fermentum ex nec justo tempor rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget,
          congue pharetra nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus
          sit amet, cursus porttitor sapien. Donec a massa et felis dictum eleifend. Etiam in dui at
          magna imperdiet gravida. Nam id tortor in leo facilisis elementum sit amet accumsan nunc.
          Maecenas lacus metus, dapibus aliquam mauris ac, luctus gravida ex.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare tincidunt, justo velit
          ultrices est, eu porta libero ante malesuada ante. Maecenas fermentum ex nec justo tempor
          rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget, congue pharetra nibh. Nulla
          eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus sit amet, cursus porttitor
          sapien. Donec a massa et felis dictum eleifend. Etiam in dui at magna imperdiet gravida.
          Nam id tortor in leo facilisis elementum sit amet accumsan nunc. Maecenas lacus metus,
          dapibus aliquam mauris ac, luctus gravida ex.{' '}
          <Button primary onClick={onClose} role="button" tabIndex="0">
            Close
          </Button>
        </div>
      )}
    </Modal>
  ))
  .add('not visible', () => (
    <Modal isOpen={false} {...actions}>
      {({ onClose }) => (
        <div>
          <Button primary onClick={onClose} role="button" tabIndex="0">
            Close
          </Button>
        </div>
      )}
    </Modal>
  ));
