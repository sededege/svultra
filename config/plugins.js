module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: 'AKIASBMLW3YJ5BLYZOMP',
          secretAccessKey: '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',
          region: "us-east-1",
          params: {
            Bucket: "ultradroptest",
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });