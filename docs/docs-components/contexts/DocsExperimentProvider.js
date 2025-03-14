// @flow strict
import { type Node } from 'react';
import { ExperimentProvider } from 'gestalt';
import { useAppContext } from '../appContext.js';

/**
 * To implement experimental behavior in the docs:
 * - Add your experiment name here
 * - Unless you want the experimental behavior live on the docs for everyone, REMOVE YOUR EXPERIMENT HERE before merging your PR!
 * */

const enabledExperiments = {
  Badge: ['web_gestalt_redesigned_badge', 'mweb_gestalt_redesigned_badge'],
  TextField: ['web_unauth_show_password_button', 'mweb_unauth_show_password_button'],
  Toast: ['web_gestalt_redesigned_toast', 'mweb_gestalt_redesigned_toast'],
};

function buildExperimentsObj(experiments: $ReadOnlyArray<string>) {
  return experiments.reduce(
    (
      acc: {|
        [string]: {|
          anyEnabled: boolean,
          group: string,
        |},
      |},
      cur: string,
    ) => ({
      ...acc,
      [cur]: { anyEnabled: true, group: 'enabled' },
    }),
    {},
  );
}

type Props = {| children: Node |};

export default function DocsExperimentProvider({ children }: Props): Node {
  const { experiments } = useAppContext();

  return (
    <ExperimentProvider
      value={buildExperimentsObj(!experiments ? [] : enabledExperiments[experiments] ?? [])}
    >
      {children}
    </ExperimentProvider>
  );
}
