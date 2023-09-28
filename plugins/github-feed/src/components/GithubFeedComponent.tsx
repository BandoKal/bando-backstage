import React from 'react';

import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import { configApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';
import { v4 as uuidv4 } from 'uuid';

type Repo = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
};

type DenseTableProps = {
  tableTitle: string;
  items: Repo[];
};

export const DenseTable = ({ tableTitle, items }: DenseTableProps) => {

  const columns: TableColumn[] = [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
    {
      title: 'Link',
      field: 'link',
      render: (rowData: { [key: string]: any; link?: string }) => rowData.link
        ? <a href={rowData.link} target="_blank" rel="noopener noreferrer">{rowData.link}</a>
        : null
    },

  ];

  const data = items.map(item => {
    return {
      id: uuidv4(),
      name: item.name || '',
      link: item.html_url || '',
      description: item.description || '',
    };
  });

  return (
    <Table
      title={tableTitle || "AWS Feed"}
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

interface GithubFeedComponentProps {
  searchKey: string;
}

export const GithubFeedComponent: React.FC<GithubFeedComponentProps> = ({ searchKey }) => {
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');
  const feedUrl = `${backendUrl}/api/github-feed-backend/${searchKey}`;

  const { value, loading, error } = useAsync(async (): Promise<Repo[]> => {

    const response = await fetch(feedUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();


    return data.items.map((item: Repo) => ({
      name: item.name || "",
      html_url: item.html_url || "",
      description: item.description || "",
    }));
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }
  const titleKey = searchKey.toUpperCase();
  return <DenseTable tableTitle={`Top ${titleKey} Repos`} items={value || []} />;
};
