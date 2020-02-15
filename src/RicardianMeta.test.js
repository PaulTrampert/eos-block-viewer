import React from 'react';
import {shallow} from 'enzyme';
import RicardianMeta from './RicardianMeta';

describe('RicardianMeta', () => {
  let subject;

  describe('render', () => {
    beforeEach(() => {
      subject = shallow(<RicardianMeta title="some title" icon="some icon" summary="the summary" />);
    });

    describe('when title is not set', () => {
      beforeEach(() => {
        subject.setProps({title: undefined});
      });
      it("doesn't render the header", () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('when title is set', () => {
      describe('when icon is not set', () => {
        beforeEach(() => {
          subject.setProps({icon: undefined});
        });

        it('renders the header with no icon', () => {
          expect(subject).toMatchSnapshot();
        });
      });
      describe('when icon is set', () => {
        it('renders the header with an icon', () => {
          expect(subject).toMatchSnapshot();
        });
      });
    });

    describe('when summary is not set', () => {
      beforeEach(() => {
        subject.setProps({summary: undefined});
      });

      it('renders without a summary', () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe('when summary is set', () => {
      it('renders with a summary', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});