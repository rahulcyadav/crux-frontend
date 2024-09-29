export const mockData = {
  record: {
    key: {
      origin: "https://developer.intuit.com",
    },
    metrics: {
      experimental_time_to_first_byte: {
        histogram: [
          {
            start: 0,
            end: 800,
            density: 0.5846,
          },
          {
            start: 800,
            end: 1800,
            density: 0.3448,
          },
          {
            start: 1800,
            density: 0.0706,
          },
        ],
        percentiles: {
          p75: 1181,
        },
      },
      first_contentful_paint: {
        histogram: [
          {
            start: 0,
            end: 1800,
            density: 0.8629,
          },
          {
            start: 1800,
            end: 3000,
            density: 0.1034,
          },
          {
            start: 3000,
            density: 0.0337,
          },
        ],
        percentiles: {
          p75: 1439,
        },
      },
      form_factors: {
        fractions: {
          phone: 0.0266,
          tablet: 0,
          desktop: 0.9734,
        },
      },
      interaction_to_next_paint: {
        histogram: [
          {
            start: 0,
            end: 200,
            density: 0.8777,
          },
          {
            start: 200,
            end: 500,
            density: 0.0677,
          },
          {
            start: 500,
            density: 0.0546,
          },
        ],
        percentiles: {
          p75: 90,
        },
      },
      largest_contentful_paint: {
        histogram: [
          {
            start: 0,
            end: 2500,
            density: 0.3086,
          },
          {
            start: 2500,
            end: 4000,
            density: 0.2582,
          },
          {
            start: 4000,
            density: 0.4332,
          },
        ],
        percentiles: {
          p75: 5791,
        },
      },
      navigation_types: {
        fractions: {
          navigate_cache: 0,
          reload: 0.0584,
          restore: 0.0497,
          back_forward: 0.0335,
          back_forward_cache: 0,
          prerender: 0.023,
          navigate: 0.8354,
        },
      },
      round_trip_time: {
        percentiles: {
          p75: 105,
        },
      },
      cumulative_layout_shift: {
        histogram: [
          {
            start: "0.00",
            end: "0.10",
            density: 0.6806,
          },
          {
            start: "0.10",
            end: "0.25",
            density: 0.1931,
          },
          {
            start: "0.25",
            density: 0.1263,
          },
        ],
        percentiles: {
          p75: "0.15",
        },
      },
    },
    collectionPeriod: {
      firstDate: {
        year: 2024,
        month: 8,
        day: 30,
      },
      lastDate: {
        year: 2024,
        month: 9,
        day: 26,
      },
    },
  },
  urlNormalizationDetails: {
    originalUrl: "https://developer.intuit.com/",
    normalizedUrl: "https://developer.intuit.com",
  },
};
