import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TableProps, Table } from '@console/internal/components/factory';
import { MsgBox } from '@console/internal/components/utils';
import HelmReleaseResourcesHeader from './HelmReleaseResourcesHeader';
import HelmReleaseResourcesRow from './HelmReleaseResourcesRow';

const HelmReleaseResourcesList: React.FC<TableProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Table
      {...props}
      aria-label={t('devconsole~Resources')}
      defaultSortField="kind"
      Header={HelmReleaseResourcesHeader(t)}
      Row={HelmReleaseResourcesRow}
      EmptyMsg={() => <MsgBox title={t('devconsole~No Resources Found')} />}
      virtualize
    />
  );
};

export default HelmReleaseResourcesList;
