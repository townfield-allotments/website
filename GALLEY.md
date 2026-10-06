# Adding an Image Gallery to the Website

Follow these steps to create a new image gallery on the website.

## 1. Create the Image Folder and Add the Photos

Create a new folder containing the images for the gallery. This can be done either locally using your terminal/IDE or directly through the GitHub web interface.

### Image Naming

- The **thumbnail** displayed on the main Gallery page is simply the **first image alphabetically**.
- To ensure the correct thumbnail is used, name the thumbnail image `000.jpg` (or the appropriate file extension).
- The names of the remaining images do not matter, as they are never displayed to users. For consistency, rename them sequentially (`001.jpg`, `002.jpg`, etc.).

On macOS, the following script can be used to rename the images:

```bash
i=0
for f in __temp_*; do
    ext="${f##*.}"
    mv "$f" "$(printf "%03d" "$i").$ext"
    i=$((i+1))
done
```

> **Note:** This script is designed for macOS/Linux. Windows users will need to use an alternative method.

Once the images have been added, commit and push the folder to Git.

---

## 2. Log in to the Website Admin

Navigate to:

<https://townfield-allotments.netlify.app/admin>

Log in with your credentials and click **New Galleries**.

---

## 3. Create the Gallery

Complete the following fields:

### Gallery Title

The title displayed on both the main Gallery page and the individual gallery page.

### Description

A short description of the gallery. Keep it concise—see the existing galleries for examples.

### Folder Name

The exact name of the image folder you created in **Step 1**.

### URL Slug

The text that appears in the page URL. Using the same value as the folder name is recommended.

---

## 4. Publish the Gallery

Click **Publish** to save the gallery.

Netlify will automatically build and deploy the updated website.

You can monitor the deployment here:

<https://app.netlify.com/projects/townfield-allotments/overview>

Once the deployment has completed successfully, the gallery will appear on the website.

---

## 5. Updating an Existing Gallery

### Adding More Photos

1. Add the new images to the existing folder.
2. Commit and push the changes to Git.
3. Wait for Netlify to rebuild the site (usually around one minute).

The new images will automatically appear in the gallery.

### Editing the Gallery Details

To change the gallery title or description:

1. Open the gallery in the admin interface.
2. Make your changes.
3. Click **Publish**.

The updated information will appear on the website once the deployment has completed.