class Article < ApplicationRecord
    mount_base64_uploader :cover, CoverUploader
end
