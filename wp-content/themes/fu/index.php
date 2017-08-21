<?php get_header(); ?>

	<?php while ( have_posts() ) : the_post();?>

		<?php echo get_template('templates/'); ?>

	<?php endwhile; ?>

<?php get_footer(); ?>