output "cert_arn" {
  description = "The cert created for the domain"
  value = module.spa_on_aws.cert_arn
}

output "build_bucket" {
  description = "Bucket used for SPA builds"
  value = module.spa_on_aws.build_bucket
}

output "build_bucket_id" {
  description = "Bucket id used for SPA builds"
  value = module.spa_on_aws.build_bucket_id
}