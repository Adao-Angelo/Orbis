CREATE POLICY "Public read access to categories"
ON categories
FOR SELECT
TO public
USING (true);
