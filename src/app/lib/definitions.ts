type HistogramEntry = {
  start: number | string;
  end?: number | string;
  density: number;
};

type Percentiles = {
  p75: number | string;
};

type Metric = {
  histogram: HistogramEntry[];
  percentiles: Percentiles;
};

type FormFactors = {
  fractions: {
    phone: number;
    tablet: number;
    desktop: number;
  };
};

type NavigationTypes = {
  fractions: {
    navigate_cache: number;
    reload: number;
    restore: number;
    back_forward: number;
    back_forward_cache: number;
    prerender: number;
    navigate: number;
  };
};

type CollectionPeriod = {
  firstDate: {
    year: number;
    month: number;
    day: number;
  };
  lastDate: {
    year: number;
    month: number;
    day: number;
  };
};

type RecordData = {
  key: {
    origin: string;
  };
  metrics: {
    [key: string]: Metric &
      FormFactors &
      NavigationTypes & {
        percentiles: Percentiles;
      };
  };
  collectionPeriod: CollectionPeriod;
};

type UrlNormalizationDetails = {
  originalUrl: string;
  normalizedUrl: string;
};

export type CrUXData = {
  record: RecordData;
  urlNormalizationDetails: UrlNormalizationDetails;
};
