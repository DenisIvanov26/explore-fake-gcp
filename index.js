async function run() {
  // [START storage_list_buckets]
  // Imports the Google Cloud client library
  const { Storage } = require("@google-cloud/storage");

  // Creates a client
  const storage = new Storage({
    apiEndpoint: "http://localhost:8080",
    projectId: "test",
  });

  //await storage.createBucket("sample-bucket")

  // Lists all buckets in the current project
  console.log("getting buckets")
  const [buckets] = await storage.getBuckets();
  console.log("Buckets:");
  console.log(buckets);
  buckets.forEach((bucket) => {
    console.log(bucket.id);
  });
  // [END storage_list_buckets]
  console.log(await storage.bucket("sample-bucket").exists())
  

  // get the contents of the bucket
  console.log("getting contents")
  const [files] = await storage.bucket("sample-bucket").getFiles();
    console.log("Files:");
    console.log(files);
}


run().catch((err) => {
  console.error(err);
  process.exit(1);
});
