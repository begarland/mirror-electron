locals {
  hosted_zone_id = "Z09841032QPYYFE764SX7"
  domain         = "dashg.co"
}

module "spa_on_aws" {
  source         = "git::https://github.com/dashg-enterprises/cloud-platform.git//modules/spa-website/aws/initialization?ref=main" #"../../cloud-platform/src/modules/spa-website/aws"#"https://github.com/dashg-enterprises/cloud-platform.git//src/modules/aws/spa-website"
  hosted_zone_id = local.hosted_zone_id
  domain         = local.domain
}