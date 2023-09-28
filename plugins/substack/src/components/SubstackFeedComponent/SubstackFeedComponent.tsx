import React from 'react';

import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import { configApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';
import { v4 as uuidv4 } from 'uuid';

type RSSItem = {
  title: string;
  link: string;
  contentSnippet: string;
};

type DenseTableProps = {
  tableTitle: string;
  items: RSSItem[];
};

export const DenseTable = ({ tableTitle, items }: DenseTableProps) => {

  const columns: TableColumn[] = [
    { title: 'Title', field: 'title' },
    { title: 'SubTitle', field: 'contentSnippet' },
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
      title: item.title || '',
      link: item.link || '',
      contentSnippet: item.contentSnippet || '',
    };
  });

  return (
    <Table
      title={tableTitle || "RSS Feed"}
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const SubstackFeedComponent = () => {
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');
  const feedUrl = `${backendUrl}/api/substack-backend/feed`;

  const { value, loading, error } = useAsync(async (): Promise<RSSItem[]> => {

    const response = await fetch(feedUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();


    return data.items.map((item: RSSItem) => ({
      title: item.title || "",
      link: item.link || "",
      contentSnippet: item.contentSnippet || ""
    }));
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable tableTitle={'Jason\'s Substack'} items={value || []} />;
};
