locals {
  application_name = "skill-iq"
  hosted_zone_id   = "Z09841032QPYYFE764SX7"
  domain           = "dashg.co"
}

module "spa_on_aws" {
  source           = "git::https://github.com/dashg-enterprises/cloud-platform.git//modules/spa-website/aws?ref=main" #"../../cloud-platform/src/modules/spa-website/aws"#"https://github.com/dashg-enterprises/cloud-platform.git//src/modules/aws/spa-website"
  dist_folder_path = "../dist"
  application_name = "${local.application_name}-${var.environment}"
  hosted_zone_id   = local.hosted_zone_id
  domain           = local.domain
  subdomain        = var.environment_subdomain
  build_id         = var.build_id
  cert_arn         = var.cert_arn
}